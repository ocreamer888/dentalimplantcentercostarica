import BenefitSection from "./BenefitSection"
import { benefits } from "@/data/benefits"
import Container from "@/components/ui/Container" // Import the Container component

const Benefits: React.FC = () => { // Removed classname prop from here
    return (
        <Container> {/* Wrap with Container */}
            <div className={`flex flex-col flex-1 items-center justify-center `} id="features">
                <h2 className="sr-only">Features</h2>
                {benefits.map((item, index) => {
                    return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
                })}
            </div>
        </Container>
    )
}

export default Benefits