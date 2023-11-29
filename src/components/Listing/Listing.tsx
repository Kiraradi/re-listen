import type { Items } from "./Items"

export default function Listing( props: Items) {
   const {items} = props;

    const determineCurrency = (currency: string) => {
      if (currency === 'USD') {
        return '$';
      } else if (currency === 'EUR') {
        return '€';
      } else {
        return currency;
      }
    };

    const determineQuantity = (quantity: number) => {
      if (quantity <= 10) {
        return 'level-low';
      } else if (quantity <= 20) {
        return 'level-medium';
      } else {
        return 'level-high';
      }
    }

    const shortenText = (text : string) => {
      if (text.length > 50) {
        return text.slice(0,50) + '...';
      }
      return text
    }

  return (
    <div className="item-list">
      {
        items.map((item, index) => {
          return <div className="item">
            <div className="item-image">
                <a href = {item.url}>
                  {item.MainImage && item.MainImage.url_570xN ? <img className="" src={item.MainImage.url_570xN}></img> : <></>}
                </a>
            </div>
             <div className="item-details">
                <p className="item-title">{item.title ? shortenText(item.title) : ''}</p>
                <p className="item-price">{`${determineCurrency(item.currency_code)}${item.price}`}</p>
                <p className = {`item-quantity ${determineQuantity(item.quantity)}`}>{item.quantity}</p>
            </div> 
          </div>
        })
      }
    </div>
  )
}
