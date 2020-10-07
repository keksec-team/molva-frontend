import {getStringsByLocale} from "../../../../../resources/languages";
import styles from "./Categories.module.css";
import React from "react";
import {connect} from "react-redux";

function Categories(props) {
    let strings = getStringsByLocale(props.locale);
    let categories = [strings.appsCategory, strings.sitesCategory, strings.gamesCategory, strings.filmsCategory]
    let activeCategoryIndex = props.activeCategoryIndex;
    console.log(activeCategoryIndex);
    return (
        <ul className={styles.categories}>
            {
                categories.map((category, i) => (
                    <li className={`${styles.category} ${i === activeCategoryIndex ? styles.active : ""}`} id={`category-${i}`} key={i}
                        onClick={() => props.setCurrentActiveCategory(i)}
                    >
                        {category}
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