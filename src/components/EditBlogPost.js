export default function EditBlogPost({ onEdit, onInputChange, formData }) {
  return (
    <form onSubmit={onEdit}>
      <label>
        UserId:
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={onInputChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onInputChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="body"
          value={formData.body}
          onChange={onInputChange}
        />
      </label>
      <button>Valider</button>
    </form>
  );
}
