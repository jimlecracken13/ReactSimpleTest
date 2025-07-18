function CareScale({careType, scaleValue})
{
    const scaleType = careType == 'light' ? '☀️' : '💧'
    const range = [1,2,3];
    return (
        <div>
            {
                range.map(
                    (rangeElement)=> scaleValue >= rangeElement &&
                    <span key={rangeElement.toString()}>
                        {scaleType}
                    </span>
                )
            }
        </div>
    )
}