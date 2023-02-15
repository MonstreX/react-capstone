import { Space, Button } from 'antd'

const StepsNav = ({ step, setStep, hasItems, next }) => {

    const justifyContent = step === 0? "flex-end" : "space-between"

    return hasItems && (
        <Space className="mg-section-top" style={{ width: "100%", justifyContent: justifyContent }}>
            {
                step > 0 && (
                    <Button className="lemon-btn-a"
                    shape="round"
                    size="large"
                    type="primary"
                    onClick={() => setStep(step - 1) }
                    >
                        Back
                    </Button>
                )
            }
            <Button className="lemon-btn-b" 
                shape="round" 
                size="large" 
                type="primary"
                onClick={() => setStep(step + 1) }
                >
                    { next }
            </Button>
        </Space>
    )
}

export default StepsNav