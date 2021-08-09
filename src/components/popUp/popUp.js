import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from "../button/button";
import SearchBar from "../searchBar/searchBar";
import { toggleFields, falseFields} from "../../redux/reducers/dummydata";



    function Popup(){
      
            const FieldList = useSelector((state) => state.dummydata.fieldsList)         
           
            const dispatch = useDispatch();
            const [input, setInput] = useState("");
            const [checkedState,SetCheckedState]=useState({});
            const [selectedIndex, setSelectedIndex] = React.useState(0)
            const [tabs] = React.useState(['All Fields', 'Dimensions', 'Measures'])
            function onChangeInputHandle(e) {
                setInput(e.target.value)
            }


            function selectTab(tabIndex){

              setSelectedIndex(tabIndex)  ;
                      
              }


            function handleChecked(e,fieldval){
                 //action dispatching checked value to store
                if (e.target.checked){
                    SetCheckedState({
                        ...checkedState,
                        [e.target.name]: e.target.checked
                    });

                    dispatch(toggleFields(fieldval))
                   
                }else{
                    SetCheckedState({
                        ...checkedState,
                        [e.target.name]: false
                    });
                    dispatch(falseFields(fieldval))
                   
                }

            }
            return(
            
                    <div className="popup">
                    <h1 className="popup__title"> Choose fields</h1>
                        <div className="popup__wrapper">
                      
                            <div className="popup-fields">
                                <div>
                                <SearchBar onChangeHandle={onChangeInputHandle} inputVal={input} inputType="search" inputPlaceholder="Search..."/>
                                </div>
                                <div className="popup-toggle-btn">
                                        {
                                    tabs.map(function(tab,index){
                                       return(
                                           <div onClick={() => {
                                               selectTab(index)
                                           }} className={`popup-toggle-btn__fields  ${selectedIndex == index?"active-btn":""}`}><p className="popup-toggle-btn-text">{tab}</p></div>
                                       ) }) }
                                 
                                </div>
                                <div>
                                    
                            
                                <div className="popup-sub__wrapper">
                                <div>
                                    <p className="popup-sub__title">Field names</p>
                                </div>
                              
                                <div>
                                        <ul className={` "popup-fields__list  "  ${selectedIndex == 0 ?"selectedField":"hidetab"}`} >
                                         {
                                              
                                                FieldList.filter(function(field){
                                                 return    input === "" || field.name.toLowerCase().includes(input.toLowerCase())
                                                         
                                                })
                                                    .map(function (field) {
                                                      
                                                        return (
                                                            <React.Fragment>
                                                                <li key={field.id} className="popup-fields__list-item">
                                                                    <input name={field.name} checked={checkedState[field.name]} onClick={(e) => handleChecked(e, field)} className="popup-fields__list-item__input" type="checkbox" />
                                                                    <span className="popup-fields__list-item__label">{field.icon}	</span>
                                                                    <p className="popup-fields__list-item__text">{field.name} </p>
                                                                </li>
                                                            </React.Fragment>
                                                        )
                                                    })
                                         } 
                                    </ul>
                                        <ul className={` "popup-fields__list  "   ${selectedIndex == 1 ? "selectedField" : "hidetab"}`} >
                                           tab 2
                                       </ul>
                                        <ul className={` "popup-fields__list  "   ${selectedIndex == 2 ? "selectedField" : "hidetab"}`} >
                                            tab 3
                                        </ul>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="popup-selected-fields-wrapper">
                                <div>
                                <h1 className="popup-selected-fields__title">Selected Fields</h1>
                                </div>
                                <div className="popup-fields__list-wrapper">
                                    <ul className="popup-fields__list">
                                    {

                                        FieldList.filter(function (field) {
                                            return field.state === true
                                        })
                                            .map(function (field) {

                                                return (
                                                    <React.Fragment>
                                                        <li  className="popup-fields__list-item">
                                                            <span className="popup-fields__list-item__label">{field.icon}	</span>
                                                            <p className="popup-fields__list-item__text"> 	{field.name}</p>
                                                        </li>
                                                    </React.Fragment>
                                                )
                                            })
                                    }
                                     
                                    </ul>
                                </div>
                            </div>
                            
                            </div>
                    <div className="popup-button__wrapper button">
                                <Button primaryButtonColor="button-primary" >
                                    Done
                                </Button>

                                <Button primaryButtonColor="button-normal" >
                                    Cancel
                                </Button>
                        </div>
                    </div>
        
            )
        }
        export default Popup ;