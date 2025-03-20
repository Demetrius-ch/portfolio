/*export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">
       <h1>BANGAKE Demetrius</h1>
      </h1>
    </div>
  );
}*/

import Header from '../app/components/Header';
import ImageGrid from './components/ImageGrid';
import Newsletter from './components/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex flex-col bg-white">
        <ImageGrid />
       
      </main>
      <Newsletter />
   
    </div>
  );
}
