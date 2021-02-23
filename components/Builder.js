function BackgroundImage({ item }) {
  return (
    <div style={{ backgroundImage: `url('${item.photo}')`, height: "200px" }}>
      <h1 style={{ color: "white" }}>{item.title}</h1>
    </div>
  );
}

function Content({ item }) {
  return <div>{item.content}</div>;
}

function Cta({ item }) {
  return <a href={item.link}>{item.title}</a>;
}

const components = {
  header: BackgroundImage,
  content: Content,
  cta: Cta,
};

export default function Builder(props) {
  const Component = components[props.type];

  return <Component item={props.item} />;
}
