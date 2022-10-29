import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

function Form(props) {
  const { title, body, changeTitle, changeBody, onClick } = props;

  return (
    <form className="form">
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={title}
        id="title"
        onChange={changeTitle}
      />
      <Editor
        apiKey="assm30e3l0yyc87ftbhr0tbwm3ltkv8xb91sos82r2n41yag"
        value={body}
        id="body"
        init={{
          height: 300,
          plugins:
            'powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists checklist wordcount tinymcespellchecker help formatpainter permanentpen charmap linkchecker emoticons advtable export print autosave',
          toolbar:
            'undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat',
          toolbar_sticky: true,
          icons: 'thin',
          skin: 'material-classic',
        }}
        onEditorChange={changeBody}
      />
      <br />
      <input
        type="button"
        value="Salvar"
        className="form-button"
        onClick={onClick}
        disabled={title.length < 5 || title.length > 100}
      />
    </form>
  );
}

export default Form;
