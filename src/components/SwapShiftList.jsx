export default function SwapShiftList() {
    const requests = [
      { id:1, day:12, user:'María' },
      { id:2, day:15, user:'Luis' }
    ]
    return (
      <ul className="swap-list">
        {requests.map(r=>(
          <li key={r.id}>
            Día {r.day} por {r.user}
            <button className="btn-primary ml-4">Tomar</button>
          </li>
        ))}
      </ul>
    )
  }