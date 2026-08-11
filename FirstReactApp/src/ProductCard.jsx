function ProductCard({ name, price , inStock }) {
    return (
        <div style={{ 
            backgroundColor: '#454545', 
            padding: '20px', 
            borderRadius: '8px',
            margin: '10px 0'
        }}>
            <h2>📦{name}</h2>
            <p>價格：${price}</p>
            <p>{inStock ? '有庫存' : '缺貨'}</p>
        </div>
    )
}

export default ProductCard