import React, {useState} from 'react';
//components
import LayoutContainer from '../../components/LayoutContainer';
import LayoutRow from '../../components/LayoutRow';
import LayoutCol from '../../components/LayoutCol';
import SectionTitle from '../../components/SectionTitle';
import Spacer from '../../components/Spacer';

const Contact = ({content}) => {

    const[emailContent, setEmailContent] = useState({
        InputName: '',
        InputEmail: '',
        InputSubject: '',
        InputMessage: ''
    });

    const formInputs = [
        {
            type: "text",
            name: "InputName",
            placeholder: "Your name",
            required: true,
            errorMessage: "Name is required.",
            width: "6"
        },
        {
            type: "email",
            name: "InputEmail",
            placeholder: "Email address",
            required: true,
            errorMessage: "Valid email is required.",
            width: "6"
        },
        {
            type: "text",
            name: "InputSubject",
            placeholder: "Subject",
            required: true,
            errorMessage: "Subject is required.",
            width: "12"
        }
    ];

    const renderFormInputs = () => {
        const render = formInputs.map((input) => {
            return (
            <div key={input.name} className={`column col-md-${input.width}`}>
                <div className="form-group">
                    <input 
                        type={input.type} 
                        className="form-control" 
                        name={input.name} 
                        id={input.name} 
                        placeholder={input.placeholder} 
                        value={emailContent[input.name]}
                        onChange={handleChange}
                        required={input.required} data-error={input.errorMessage} />
                    <div className="help-block with-errors" />
                </div>
            </div>);
        });

        return render;
    };

    const handleChange = (e) =>{
        setEmailContent({
            ...emailContent,
            [e.target.name] : e.target.value
        });
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(emailContent);
    };


    return (
        <section id="contact">

            <LayoutContainer>

                {/* section title */}
                <SectionTitle title={content.sectionTitle} visibility="visible" animationName="fadeInUp" />

                <Spacer height={60} classListing="spacer" />

                <LayoutRow>

                    <LayoutCol classList="col-md-4">
                        {/* contact info */}
                        <div className="contact-info">
                            <h3 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>{content.headline}</h3>
                            <p className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>Don't like forms? Find me on <a href={content.link}>{content.social}</a>.</p>
                        </div>
                    </LayoutCol>

                    <LayoutCol classList="col-md-8">

                        {/* Contact Form */}
                        <form id="contact-form" className="contact-form mt-6" noValidate={true} onSubmit={handleSubmit}>

                            {/* Message placeholder for response */}
                            <div className="messages" />

                            <LayoutRow>

                                {renderFormInputs()}

                                <div className="column col-md-12">
                                    {/* Message textarea */}
                                    <div className="form-group">
                                        <textarea 
                                            name="InputMessage" 
                                            id="InputMessage" 
                                            className="form-control" 
                                            rows={5} 
                                            placeholder="Message" 
                                            required="required" 
                                            data-error="Message is required."
                                            value={emailContent.InputMessage} 
                                            onChange={handleChange}
                                            />
                                        <div className="help-block with-errors" />
                                    </div>
                                </div>

                            </LayoutRow>

                            {/* Send Button */}
                            <button type="submit" name="submit" id="submit" value="Submit" className="btn btn-default disabled">Send Message</button>

                        </form>

                    </LayoutCol>

                </LayoutRow>

            </LayoutContainer>

        </section>
    );
};

export default Contact;