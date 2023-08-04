/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: 'title'
}

class Component<T extends ComponentProps> {
  constructor (public props:T) {

  }
}

class Page extends Component<ComponentProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};