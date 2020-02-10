import React from 'react';
import MoodRadioButton from '../../components/FormComponents/MoodRadioButton';

const SelectMoodPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width container" >
      <form>
      <div className="bx--row" >
        <div className="bx--col-lg-16 SectionHeaders">Squad Details</div>
        <div className="bx--col-lg-16 bx--no-gutter Rows">
          <div className="">
            <label htmlFor="subdomain" className="floatLabel">Sub Domain</label>
            <input type="text" id="subdomain" //placeholder="Provide your Sub Domain" 
            />
          </div>
          <div className="">
            <label htmlFor="tribe" className="floatLabel">Tribe</label>
            <input type="text" id="tribe" //placeholder="Provide your Tribe"
            />
          </div>
        </div>
        <div className="bx--col-lg-16 bx--no-gutter Rows">
          <div className="">
            <label htmlFor="squadname" className="floatLabel">Squad Name</label>
            <input type="text" id="squadname" //placeholder="Provide Your Squad Name"
             />
          </div>
        </div>
      </div>
      <div className="bx--row">
        <div className="SectionHeaders">How Do You Feel Today????</div>
        <div>
          <MoodRadioButton id="Sad" name="Moods" label="Sad" value="1" ImageClass="radioImage"
          /* changed={this.radioChangeHandler} isSelected={this.state.paymentMethod === "QuickPay"} */
          labelImage={`${process.env.PUBLIC_URL}/utils/images/sad.png`} alignmentClass="RadioOptionsAlignment" />

          <MoodRadioButton id="SomewhatSad" name="Moods" label="SomewhatSad" value="2" ImageClass="radioImage"
          /* changed={this.radioChangeHandler} isSelected={this.state.paymentMethod === "QuickPay"} */
          labelImage={`${process.env.PUBLIC_URL}/utils/images/somewhatsad.png`} alignmentClass="RadioOptionsAlignment" />

          <MoodRadioButton id="Neutral" name="Moods" label="Neutral" value="2" ImageClass="radioImage"
          /* changed={ this.radioChangeHandler } isSelected={ this.state.paymentMethod === "QuickPay" } */
          labelImage={`${process.env.PUBLIC_URL}/utils/images/neutral.png`} alignmentClass="RadioOptionsAlignment" />
          
          <MoodRadioButton id="SomewhatHappy" name="Moods" label="Somewhat Happy" value="2" ImageClass="radioImage"
          /* changed={ this.radioChangeHandler } isSelected={ this.state.paymentMethod === "QuickPay" } */
          labelImage={`${process.env.PUBLIC_URL}/utils/images/somewhathappy.png`} alignmentClass="RadioOptionsAlignment" />
          
          <MoodRadioButton id="Happy" name="Moods" label="Happy" value="2" ImageClass="radioImage"
          /* changed={ this.radioChangeHandler } isSelected={ this.state.paymentMethod === "QuickPay" } */
          labelImage={`${process.env.PUBLIC_URL}/utils/images/happy.jpg`} alignmentClass="RadioOptionsAlignment" />
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-16 bx--no-gutter">Thank you for your score!!! What did you find valuable/significant for your Squad/Role?</div>
        <div className="bx--col-lg-16 bx--no-gutter">
          <div className="">Choose Only One Option -</div> 
          <div className=""></div>
        </div>
        <div className="bx--col-lg-16 bx--no-gutter">Your Feedback is key!!! Please let us know which of the following should have the highest priority to improve</div>
        <div className="bx--col-lg-16 bx--no-gutter">
          <div className="">Choose Only One Option - </div>
          <div className=""></div> 
        </div> 
      </div>
      <div className="bx--row">
        <div className="SectionHeaders">Comments</div>
        <div><textarea/></div>
      </div>
      <div className="bx--row">
        <input type="submit" value="Submit"></input>
      </div>
      </form>
    </div>
  );
};

export default SelectMoodPage;