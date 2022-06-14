import './Hightlight.css';

const Hightlight = (props: any) => {
    const { filter, str } = props
    if (!filter) return str
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)
    if (matchValue) {
      return str.split(regexp).map((s: string, index: number, array: any) => {
        if (index < array.length - 1) {
          const c = matchValue.shift()
          return <>{s}<span className={'hightlight'}>{c}</span></>
        }
        return s
      })
    }
    return str
}

export default Hightlight;