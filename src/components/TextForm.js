import React,{useState} from "react"; //rfc --> react function based component

export default function TextForm(props) {
   const [text,setText] = useState('Enter The Text')
  return (
    <div>
      <div className="mb-3">
        <label for="myBox" className="form-label">
          {props.heading} 
        </label>
        <textarea className="form-control" id="myBox" value = {text} rows="3"></textarea>
      </div>
      <button className="btn btn-primary">Convert to Upper Case</button>
    </div>
  );
}
