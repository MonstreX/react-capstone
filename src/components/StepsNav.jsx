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
            {
                step == 0 && (
                    <Button className="lemon-btn-b"
                        shape="round"
                        size="large"
                        type="primary"
                        onClick={() => setStep(step + 1) }
                        >
                            { next }
                    </Button>
                ) 
            }
            {
                step == 1 && (
                    <Button className="lemon-btn-b"
                    shape="round"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    >
                        { next }
                    </Button>
                ) 
            }
        </Space>
    )
}

export default StepsNav