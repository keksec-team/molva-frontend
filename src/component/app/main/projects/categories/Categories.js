import {getStringsByLocale} from "../../../../../resources/languages";
import styles from "./Categories.module.css";
import React, {useEffect} from "react";
import {connect} from "react-redux";

function Categories(props) {
    let strings = getStringsByLocale(props.locale);
    let categories = {"apps": strings.appsCategory, "sites": strings.sitesCategory, "games": strings.gamesCategory, "films": strings.filmsCategory}
    let activeCategory = props.activeCategory;
    return (
        <ul className={styles.categories}>
            {
                Object.entries(categories).map(([categoryName, categoryNameByLocale], i) => (
                    <li className={`${styles.category} ${i === 0 ? styles.first : ""} ${categoryName === activeCategory ? styles.active : ""}`} id={`category-${categoryName}`} key={categoryName}
                        onClick={() => props.setCurrentActiveCategory(categoryName)}
                    >
                        {categoryNameByLocale}
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