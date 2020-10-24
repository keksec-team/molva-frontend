import styles from "./Categories.module.css";
import React from "react";
import {connect} from "react-redux";

function Categories(props) {
    return (
        <ul className={styles.categories}>
            {
                props.categories.map((categoryName, i) => (
                    <li className={`${styles.category} 
                    ${i === 0 ? styles.first : ""} 
                    ${i === props.activeCategoryIndex ? styles.active : ""}`}
                        id={`category-${categoryName}`} key={categoryName}
                        onClick={() => props.setCurrentActiveCategory(i)}>
                        {categoryName}
                    </li>
                ))
            }
        </ul>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Categories);