import { useRef } from "react";

export const FieldInput = (props: { inviteFiles: any; }) => {
  const { inviteFiles } = props;
  const inputRef = useRef<HTMLInputElement>(null); // сохранили ссылку на поле input

  const onClickConteiner = () => {
    // При клике контейнера вызываем клик у поля input через inputRef
    inputRef.current?.click();
  }

  return (
    <div className="conteiner__frame" onClick={onClickConteiner}>
      <input type="file" className="frame__input" accept='image/*' multiple onChange={inviteFiles} ref={inputRef} />
      <div className="frame__span">
        <span className="span__text">Click to select</span>
      </div>
    </div>
  );
}
