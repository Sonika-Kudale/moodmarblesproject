
import React, { Component, Fragment } from 'react';
import { Button, Accordion, AccordingItem, AccordionItem, RadioButtonGroup, RadioButton } from 'carbon-components-react';
import TextInput from 'carbon-components-react/lib/components/TextInput';
import TextInputSkeleton from 'carbon-components-react/lib/components//TextInput/TextInput.Skeleton';
import MoodOptions from '../Components/MoodOptions';
import '../App.scss'
import './Styling.scss'

const MoodMarble = () => {
    return(
        <div className="bx--grid bx--grid--full-width" >
            <div className="bx--row" >
                <div className="bx--col-lg-16 SectionHeaders">Squad Details</div>
                <div className="bx--col bx--no-gutter Rows">
                    <div className="bx--col-md-4 bx--col-lg-7">
                                <label>SubDomain</label>
                                <input type="text"></input>
                    </div>

                    <div className="bx--col-md-4 bx--col-lg-7">
                                <label>Tribe</label>
                                <input type="text"></input>
                                
                    </div>   
                    
                </div> 
                <div>
                        <div class="bx--col">
                            <TextInput
                                /*className="some-class"  
                                defaultValue="This is not a default value"
                                disabled={false}
                                helperText="Optional helper text."*/
                                id="SquadName"
                                invalid={false}
                                invalidText="A valid value is required"
                                labelText="Squad Name"
                                /* light={false}
                                onChange={function noRefCheck(){}}
                                onClick={function noRefCheck(){}} */
                                placeholder="Provide Your Squad Name"
                                type="text"
                            />
                        </div>
                </div>      
                
            </div>    
        
            <div className="bx--row">
                    <div className="SectionHeaders">
                            How Do You Feel Today????
                    </div>

                    <div>
                        <MoodOptions
                                    /* changed={ this.radioChangeHandler } */ 
                                    id="Sad" 
                                    name="Moods"
                                    // isSelected={ this.state.paymentMethod === "QuickPay" } 
                                    label="Sad" 
                                    value="1" 
                                    image= {`${process.env.PUBLIC_URL}/utils/images/sad.png`}
                                     class="radioImage"
                                    AlignmentClass="RadioOptionsAlignment"
                        />
                        <MoodOptions
                                    /* changed={ this.radioChangeHandler } */ 
                                    id="SomewhatSad" 
                                    name="Moods"
                                    // isSelected={ this.state.paymentMethod === "QuickPay" } 
                                    label="SomewhatSad" 
                                    value="2" 
                                    image= {`${process.env.PUBLIC_URL}/utils/images/somewhat Sad.png`}
                                    class="radioImage"
                                    AlignmentClass="RadioOptionsAlignment"
                        />
                        <MoodOptions
                                    /* changed={ this.radioChangeHandler } */ 
                                    id="Neutral" 
                                    name="Moods"
                                    // isSelected={ this.state.paymentMethod === "QuickPay" } 
                                    label="Neutral" 
                                    value="2" 
                                    image= {`${process.env.PUBLIC_URL}/utils/images/neutral.png`}
                                    class="radioImage"
                                    AlignmentClass="RadioOptionsAlignment"
                        />
                       
                        <MoodOptions
                                    /* changed={ this.radioChangeHandler } */ 
                                    id="SomewhatHappy" 
                                    name="Moods"
                                    // isSelected={ this.state.paymentMethod === "QuickPay" } 
                                    label="Somewhat Happy" 
                                    value="2" 
                                    image= {`${process.env.PUBLIC_URL}/utils/images/somewhat happy.png`}
                                    class="radioImage"
                                    AlignmentClass="RadioOptionsAlignment"
                        />
                         <MoodOptions
                                    /* changed={ this.radioChangeHandler } */ 
                                    id="Happy" 
                                    name="Moods"
                                    // isSelected={ this.state.paymentMethod === "QuickPay" } 
                                    label="Happy" 
                                    value="2" 
                                    image= {`${process.env.PUBLIC_URL}/utils/images/Happy.jpg`}
                                    class="radioImage"
                                    AlignmentClass="RadioOptionsAlignment"
                        />
                    </div>   
                   
            </div>

            <div className="bx--row">
                <div>
                    <div>
                    Thankyou for your score!!!What did you find valuable/significant for your Squad/Role?
                    </div>

                    <div>
                             <div className="bx--column">
                        Choose Only One Option - 
                    </div> 
                             <div className="bx--column">
                    <RadioButtonGroup  orientation= "vertical">
                           <RadioButton
                                   className="some-class"
                                   id="SquadCollaboration"
                                   labelText="Squad Collaboration"
                                   value="standard"
                                  
                               
                           />
                           <RadioButton
                                   className="some-class"
                                   id="AgileCeremonies"
                                   labelText="Agile Ceremonies"
                                   value="standard"
                               
                           />
                           <RadioButton
                                   className="some-class"
                                   id="LearningOtherRoles"
                                   labelText="Learning Other Roles"
                                   value="standard"
                               
                           />
                           <RadioButton
                                   className="some-class"
                                   id="Empowerment"
                                   labelText="Empowerment"
                                   value="standard"
                               
                           />
                           <RadioButton
                                   className="some-class"
                                   id="Tools"
                                   labelText="Tools"
                                   value="standard"
                               
                           />
                           <RadioButton
                                   className="some-class"
                                   id="Other"
                                   labelText="Other"
                                   value="standard"
                               
                           />
                           
                           
                           </RadioButtonGroup>
                    </div> 
                    </div>    
        
                </div>

                <div>
                        <div>
                            Your Feedback is key!!!Please let us know which of the following should have the highest priority to improve
                        </div>
                        <div>
                             <div className="bx--column">
                                     Choose Only One Option - 
                             </div> 
                             
                             <div className="bx--column">
                                    <RadioButtonGroup  orientation= "vertical">
                                        <RadioButton
                                            className="some-class"
                                            id="WorkLoad"
                                            labelText="WorkLoad"
                                            value="standard"
                                        />
                                        <RadioButton
                                           className="some-class"
                                           id="Agile"
                                            labelText="Agile(# of) meetings"
                                            value="standard"
                                        />
                                        <RadioButton
                                            className="some-class"
                                            id="Communication"
                                            labelText="Communication"
                                            value="standard"
                                        />
                                        <RadioButton
                                            className="some-class"
                                            id="Complexity"
                                            labelText="Process Complexity"
                                            value="standard"
                                        />
                                        <RadioButton
                                            className="some-class"
                                            id="ClarityoFPurpose"
                                            labelText="Clarity of purpose"
                                            value="standard"
                                        />
                                        <RadioButton
                                            className="some-class"
                                            id="AccessToEductaion"
                                            labelText="Access To education"
                                            value="standard"
                                        />
                                        <RadioButton
                                            className="some-class"
                                            id="Squad Management"
                                            labelText="Squad Management"
                                            value="standard"
                                        />
                                        <RadioButton
                                            className="some-class"
                                            id="Tools"
                                            labelText="Tools"
                                            value="standard"
                                        />
                                        <RadioButton
                                            className="some-class"
                                            id="Others"
                                            labelText="Others"
                                            value="standard"
                                        />
                                    </RadioButtonGroup>
                    </div> 
                    </div> 
                </div>
                 
               
            </div>

            <div className="bx--row">
                <div className="SectionHeaders">Comments</div>
                <div><input type="textArea"></input></div>
                
            </div>
        
            <div className="bx--row">
            <input type="submit" value="Submit"></input>
            </div>
        </div>

    )
}

export default MoodMarble