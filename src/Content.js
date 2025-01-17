import { useEffect, useState } from "react"

function Content() {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    }
  }, [avatar]);

  const HandleAvatarPreview = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    //file là object nên có thể tạo thêm thuộc tính preview
    //gán file cho avatar => avatar.preview chính là src của tấm ảnh
  }
  return (
    <div>
      <input
        type="file"
        onChange={HandleAvatarPreview}
      />
      <br />

      {avatar && <img src={avatar.preview} sizes="50%" />}
    </div>
  )
}
export default Content