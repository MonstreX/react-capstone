import PageHeader from '../components/PageHeader'
import menuList from "../data/menu"
import MenuList from "../components/MenuList"

import headerImage from '../assets/images/header3.jpg'

const Menu = () => {
    return (
        <>
            <PageHeader title="Menu" subtitle="Our menu" image={headerImage}/>

            <div className="container mg-section-top mg-section-bottom">
                <section className="mg-section-top">
                    <h2 className="lemon-title mg-title-section">Menu</h2>
                    <MenuList menuList={menuList} />
                </section>
            </div>
        </>

    )
}

export default Menu