'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import navbarComponents, { NavbarDark } from '../components/navbar';

export default function WeatherApp() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleString());
  }, []);

  return <div>
    {NavbarDark()}
    <div className="container">
      <header className="header">
        <p>Météo</p>
        <p>{currentDate}</p>
      </header>
      <main>
        <h1>Paris</h1>
        <div className="weather-now">
          <Image
            src="/img/misoleilminuage.png"
            alt="Soleil avec des nuages"
            width={50}
            height={50}
            className="weather-icon"
          />
          <h2>15°C</h2>
          <p>Partiellement ensoleillé</p>
        </div>
        <div className="hourly-forecast">
          <div className="hour">
            <p>06:00</p>
            <Image
              src="/img/coucherdesoleil.png"
              alt="Lever du soleil"
              width={30}
              height={30}
            />
          </div>
          <div className="hour">
            <p>12:00</p>
            <Image
              src="/img/soleil.png"
              alt="Plein soleil"
              width={30}
              height={30}
            />
          </div>
          <div className="hour">
            <p>16:00</p>
            <Image
              src="/img/misoleilminuage.png"
              alt="Plein soleil"
              width={30}
              height={30}
            />
          </div>
          <div className="hour">
            <p>20:00</p>
            <Image
              src="/img/coucherdesoleil.png"
              alt="Coucher de soleil"
              width={30}
              height={30}
            />
          </div>
          <div className="hour">
            <p>00:00</p>
            <Image src="/img/nuit.png" alt="Nuit" width={30} height={30} />
          </div>
        </div>
        <div className="weekly-forecast">
          <div className="box">
            <p>11/09</p>
            <Image src="/img/pluvieux.png" alt="Pluvieux" width={40} height={40} />
          </div>
          <div className="box">
            <p>12/09</p>
            <Image src="/img/misoleilminuage.png" alt="Soleil avec nuage" width={40} height={40} />
          </div>
          <div className="box">
            <p>13/09</p>
            <Image src="/img/soleil.png" alt="Soleil" width={40} height={40} />
          </div>
        </div>
      </main>
    </div>
  </div>;
}