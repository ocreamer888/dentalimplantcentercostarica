import { allonsix } from "@/data/allonsix"
import Container from "@/components/ui/Container" // Import the Container component
import SixSection from "./SixSection"

const AllOnSix: React.FC = () => { // Removed classname prop from here
    return (
        <Container> {/* Wrap with Container */}
            <div className={`flex flex-col flex-1 items-center justify-center `} id="features">
                <h2 className="sr-only">Features</h2>
                {allonsix.map((item, index) => {
                    return <SixSection key={index} benefit={item} imageAtRight={index % 2 !== 2} />
                })}
            </div>
        </Container>
    )
}

export default AllOnSix