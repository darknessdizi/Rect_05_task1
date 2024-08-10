interface IImageProps {
  info: {
    path: string,
    alt: string,
  }
}

export const ImgItem = ({ info }: IImageProps) => {
  const { path, alt } = info;

  return (
    <img src={path} className="card-img-top" alt={alt}></img>
  )
}
