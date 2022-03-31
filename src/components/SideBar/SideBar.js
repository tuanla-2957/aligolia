import './SideBar.scss'
import Category from '../Category/Category';
import Refinement from '../Refinement/Refinement';

function SideBar() {
    const categories = ["Appliances", "Audio", "Cameras & Camcorders", "Car Electronics & GPS", "Cell Phones", "Computers & Tables", "Health, Finess & Beauty", "Office & school Supplies", "TV & Home Theater", "Video Games"]
    const types = [
        {
            name: "Insignia",
            quantity: 457
        },
        {
            name: "Samsung",
            quantity: 393
        },
        {
            name: "Metra",
            quantity: 249
        },
        {
            name: "HP",
            quantity: 217
        },
        {
            name: "Apple",
            quantity: 181
        },
    ]
    const ratings = [
        {
            rate: 4,
            quantity: 217
        },
        {
            rate: 3,
            quantity: 217
        },
        {
            rate: 2,
            quantity: 217
        },
        {
            rate: 1,
            quantity: 217
        },
    ]
    const prices = ["≤ 1","$1 - 80","$80 - 160","$160 - 240","$240 - 1820","$1820 - 3400", "$3400 - 4980" , "≥ $4,980"]
    return (
        <aside className="side-bar">
            <div className="clear-filter"></div>
            <div className="facet">
                <div className="facet__title">Show result for</div>
                <div className="categories">
                    <Category data={categories}>
                        {(category, index) => {
                            return (
                                <li className="category__item" key={index}>
                                    <i className="fa fa-angle-right"></i>
                                    {category}
                                </li>
                            )
                        }}
                    </Category>
                </div>
            </div>
            <div className="facet">
                <div className="facet__title">Refine By</div>
                <div className="refinement type">
                    <Refinement title='Type' data={types} />
                </div>

                <div className="refinement Brand">
                    <Refinement title='Brand' data={types} />
                </div>

                <div className="refinement type">
                    <Refinement title='Ratings' data={ratings} />
                </div>

                <div className="refinement Prices">
                    <Refinement title='Prices' data={prices} />
                </div>
            </div>
            <div className="side-bar__other">
                Data courtery of Best Buy
            </div>
        </aside>
    );
}

export default SideBar