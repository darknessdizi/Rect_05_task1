export const ImageItem = (props: { srcUrl: string; callback: any }) => {
  const { srcUrl, callback } = props;

  const handleClick = () => {
    // При клике кнопки крестик (удаление изображения)
    callback(srcUrl);
  }

  return (
    <div className="image__conteiner">
      <img src={srcUrl} alt="" className="image" />
      <a href="#" className="image__delete" onClick={handleClick}></a>
    </div>
  )
}
