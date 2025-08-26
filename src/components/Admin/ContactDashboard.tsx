'use client';
import React, { useState, useEffect } from 'react';
import { getContactMessages, updateMessageStatus, addInternalNote } from '@/lib/actions/adminActions';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message?: string;
  status: 'pending' | 'read' | 'contacted' | 'resolved';
  created_at: string;
  internal_notes?: string[];
}

type MessageStatus = 'pending' | 'read' | 'contacted' | 'resolved';

const ContactDashboard: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const result = await getContactMessages();
      if (result.success && result.data) {
        setMessages(result.data as ContactMessage[]);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (messageId: string, newStatus: MessageStatus) => {
    try {
      const result = await updateMessageStatus(messageId, newStatus);
      if (result.success) {
        setMessages(prev => prev.map(msg => 
          msg.id === messageId ? { ...msg, status: newStatus } : msg
        ));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'all') return true;
    return msg.status === filter;
  });

  if (loading) {
    return <div className="flex justify-center p-8">Loading messages...</div>;
  }

  return (
    <div className="container mx-auto p-6 text-black">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Messages Dashboard</h1>
        
        {/* Filter Controls */}
        <div className="mb-6 flex gap-4">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 text-black border rounded-lg"
          >
            <option value="all">All Messages</option>
            <option value="pending">Pending</option>
            <option value="read">Read</option>
            <option value="contacted">Contacted</option>
            <option value="resolved">Resolved</option>
          </select>
          <button 
            onClick={loadMessages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>

        {/* Messages Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Status</th>
                <th className="border border-gray-300 p-3 text-left">Date</th>
                <th className="border border-gray-300 p-3 text-left">Name</th>
                <th className="border border-gray-300 p-3 text-left">Email</th>
                <th className="border border-gray-300 p-3 text-left">Subject</th>
                <th className="border border-gray-300 p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map((message) => (
                <tr key={message.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      message.status === 'pending' ? 'bg-red-100 text-red-800' :
                      message.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                      message.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {message.status}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-3">
                    {new Date(message.created_at).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 p-3">{message.name}</td>
                  <td className="border border-gray-300 p-3">{message.email}</td>
                  <td className="border border-gray-300 p-3">{message.subject}</td>
                  <td className="border border-gray-300 p-3">
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <MessageDetailModal 
          message={selectedMessage} 
          onClose={() => setSelectedMessage(null)}
          onStatusUpdate={handleStatusUpdate}
        />
      )}
    </div>
  );
};

// Message Detail Modal Component
interface MessageDetailModalProps {
  message: ContactMessage;
  onClose: () => void;
  onStatusUpdate: (messageId: string, status: MessageStatus) => void;
}

const MessageDetailModal: React.FC<MessageDetailModalProps> = ({ 
  message, 
  onClose, 
  onStatusUpdate 
}) => {
  const [note, setNote] = useState('');
  const [isAddingNote, setIsAddingNote] = useState(false);

  const handleAddNote = async () => {
    if (!note.trim()) return;
    
    setIsAddingNote(true);
    try {
      const result = await addInternalNote(message.id, note);
      if (result.success) {
        setNote('');
        // Refresh the message data
        onClose();
      }
    } catch (error) {
      console.error('Error adding note:', error);
    } finally {
      setIsAddingNote(false);
    }
  };

  const getStatusColor = (status: MessageStatus) => {
    switch (status) {
      case 'pending': return 'bg-red-100 text-red-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'contacted': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Message Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">From</label>
                <p className="text-gray-900">{message.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="text-gray-900">{message.email}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <p className="text-gray-900">
                {new Date(message.created_at).toLocaleString()}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <p className="text-gray-900">{message.subject}</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(message.status)}`}>
                  {message.status}
                </span>
                <select
                  value={message.status}
                  onChange={(e) => onStatusUpdate(message.id, e.target.value as MessageStatus)}
                  className="px-3 py-1 border rounded-lg"
                >
                  <option value="pending">Pending</option>
                  <option value="read">Read</option>
                  <option value="contacted">Contacted</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>

            {message.message && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                  {message.message}
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Internal Notes</label>
              <div className="space-y-2">
                {message.internal_notes && message.internal_notes.length > 0 ? (
                  message.internal_notes.map((note, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-900">{note}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">No notes yet</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Add Note</label>
              <div className="flex gap-2">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add internal note..."
                  className="flex-1 px-3 py-2 border rounded-lg resize-none"
                  rows={3}
                />
                <button
                  onClick={handleAddNote}
                  disabled={isAddingNote || !note.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isAddingNote ? 'Adding...' : 'Add Note'}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDashboard;
