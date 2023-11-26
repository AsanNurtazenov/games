import React, { useState } from "react";
import { MdHeight } from "react-icons/md";
const Header = function () {
    const [count, setCount] = useState(0)
    return (
        <section style={{ 'height':'700px' }}>
            <form class="has-background-light container center">
                <div class="container " style={{ 'height': '700px','width':'900px','mt':'left' }} >
                    <img src="https://mentaalne-aritmeetika.ee/wp-content/uploads/2019/08/brain-training-e1566029369415.jpg" alt="" />
                </div>
            </form>
        </section>
    )
}
export default Header;