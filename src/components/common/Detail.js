
const Detail = ({ detail }) => {

    const keys = Object.keys(detail);

    return (<div>
        {
            keys.map((key, index) => <p key={index}> {
                key + ": " +
                (typeof detail[key] === 'boolean' ? detail[key] ? "Si" : "No" : detail[key])
            }</p>)
        }
    </div>);
}

export default Detail;