import Input from "./Input";

export default function EditBlogPost({ onEdit, onInputChange, formData }) {
  return (
    <form onSubmit={onEdit}>
      <Input label="UserId : " type="text" name="userId" value={formData.userId} onInputChange={onInputChange}/>
      <Input label="Titre : " type="text" name="title" value={formData.title} onInputChange={onInputChange}/>
      <Input label="Description :  : " type="text" name="body" value={formData.body} onInputChange={onInputChange}/>
      <button>Valider</button>
    </form>
  );
}
