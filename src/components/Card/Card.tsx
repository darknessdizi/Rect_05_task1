interface ICardProps {
  title: string,
  body: string,
  link?: string,
  btnTitle?: string,
  children?: React.ReactNode,
}

export const Card = (props: ICardProps) => {
  const { children, title, body, link = "#", btnTitle = "Выбрать" } = props;

  return (
    <div className="card" style={{width: "18rem"}}>
        { children }
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <a href={link} className="btn btn-primary">{btnTitle}</a>
        </div>
    </div>
  )
}
