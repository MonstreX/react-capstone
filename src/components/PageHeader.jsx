
const PageHeader = ({title, subtitle, image}) => {
    return (
        <section className="page-header" style={{backgroundImage: `url(${image})` }}>
            <div className="page-header__wrapper">
                <div className="container">
                    <div className="page-header__content">
                        <h1 className="lemon-title page-header-title">{title}</h1>
                        <span className="lemon-subtitle page-header-title">{subtitle}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeader