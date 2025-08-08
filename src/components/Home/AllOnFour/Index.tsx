import { allonfour } from "@/data/allonfour"
import Container from "@/components/ui/Container" // Import the Container component
import FourSection from "./FourSection"

const AllOnFour: React.FC = () => { // Removed classname prop from here
    return (
        <Container> {/* Wrap with Container */}
            <div className={`flex flex-col flex-1 w-full items-center justify-center `} id="features">
                <h2 className="sr-only">Features</h2>
                {allonfour.map((item, index) => {
                    return <FourSection key={index} benefit={item} imageAtRight={index % 2 !== 2} />
                })}
            </div>
        </Container>
    )
}

export default AllOnFour