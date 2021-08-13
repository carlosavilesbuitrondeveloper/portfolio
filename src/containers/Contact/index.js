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

    const[message, setMessage] = useState('');
    const[done, setDone] = useState(false);

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

        //check for data
        const formData = Object.values(emailContent);
        let isValid = true;

        formData.forEach((value)=>{
            if(!value){
                isValid = false;
            }
        });

        //check for email
        if(!emailContent.InputEmail.includes('@')){
            isValid = false;
        }

        //if form is not valid, do not post
        if(!isValid){
            console.log('Form is not properly filled out');
            return;
        }
        
        console.log('Post email');
        setMessage('Thank you. I\'ll be in touch shortly.');
        setDone(true);

    };


    return (
        <section id="contact">

            <LayoutContainer>

                {/* section title */}
                <SectionTitle title={content.sectionTitle} visibility="visible" animationName="fadeInUp" />

                <Spacer height={60} classListing="spacer" />

                <LayoutRow>

                    <LayoutCol classList="col-md-12">
                        {/* contact info */}
                        <div className="contact-info text-center">
                            <h3>Email: <a href="mailto:info@carlos-developer.com">Info@Carlos-Developer.com</a></h3>
                            <h4 className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>{content.headline}</h4>
                            <p className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>You can also find me on <a href={content.link}>{content.social}</a>.</p>
                        </div>
                    </LayoutCol>

              

                </LayoutRow>

            </LayoutContainer>

        </section>
    );
};

export default Contact;