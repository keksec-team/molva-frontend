import React, {useState} from "react";
import {connect} from 'react-redux';
import styles from "./CreateProject.module.css";
import {getStringsByLocale} from "../../../../resources/languages";
import {CustomInputField, useStyles} from "../../helper/input/CustomInput";
import {useForm} from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

function CreateProject(props) {
    let strings = getStringsByLocale(props.locale);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");
    const {register, errors} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const onClick = () => {
        setName(document.getElementById("input-name").value)
        setDescription(document.getElementById("input-description").value)
    }
    const classes = useStyles();
    return (
        <div className={styles.projectCreation}>
            <div className={styles.projectCreationElementsContainer}>
                <div className={styles.projectCreationHeader}>
                    {strings.projectCreation}
                </div>
                <div className={styles.projectCreationForm}>
                    <div className={styles.formColumnOne}>
                        <CustomInputField
                            name="name"
                            variant="filled"
                            id="input-name"
                            label={strings.projectCreationFormName}
                            type="text"
                            helperText={errors.name?.message}
                            className={classes.margin}
                            inputProps={{
                                maxLength: 30,
                            }}
                            inputRef={register({
                                maxLength: 30,
                                required: strings.validationNameRequired,
                                minLength: {
                                    value: 2,
                                    message: strings.validationNameLength
                                },
                            })}
                            autoComplete='name'
                            error={errors.name}
                        />

                        <CustomInputField
                            name="description"
                            multiline={true}
                            variant="filled"
                            id="input-description"
                            label={strings.contactsFormDescription}
                            helperText={errors.description?.message}
                            className={classes.margin}
                            style={{'margin-top': '6vh'}}
                            rowsMax={8}
                            inputRef={register({
                                maxLength: {
                                    value: 3000,
                                    message: strings.validationDescriptionLength
                                },
                                required: strings.validationDescriptionRequired,
                            })}
                            error={errors.description}
                            defaultValue={description}
                        />
                    </div>
                    <div className={styles.formColumnTwo}>
                        <div className={styles.subContainer}>
                            <div className={styles.inputs}>
                                <FormControl required className={classes.margin}>
                                    <InputLabel
                                        id="demo-simple-select-required-label">{strings.categoryLabel}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-required-label"
                                        id="demo-simple-select-required"
                                        value={category}
                                        onChange={handleChange}
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                                <CustomInputField
                                    name="link"
                                    variant="filled"
                                    id="input-link"
                                    label={strings.projectCreationFormLink}
                                    type="text"
                                    helperText={errors.name?.message}
                                    className={classes.margin}
                                    style={{'margin-top': '6vh'}}
                                    inputProps={{
                                        maxLength: 500,
                                    }}
                                    inputRef={register({
                                        maxLength: 500,
                                        required: strings.validationLinkRequired,
                                        minLength: {
                                            value: 2,
                                            message: strings.validationLoginLength
                                        },
                                    })}
                                    autoComplete='name'
                                    error={errors.name}
                                />
                            </div>
                            <div className={styles.saveButtonContainer}>
                                <button className={styles.saveButton}>{strings.saveBtn}</button>
                            </div>
                        </div>
                        <div className={styles.dragAndDropField}>
                            <img src={require('../../../../assets/picture.png')} alt="images"/>
                            <img src={require('../../../../assets/cinema.png')} alt="video"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(CreateProject);
