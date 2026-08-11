import ProductCard from './ProductCard'  // 引入子元件

function App() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1> Props </h1>
            
            <ProductCard name="Smartphone" price={100} inStock={true} />
            <ProductCard name="Laptop" price={200} inStock={false} />
            <ProductCard name="Tablet" price={150} inStock={true} />
        </div>
    )
}

export default App