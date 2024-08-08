"use client";
import Footer from "./footer/Footer";
import Header from "./header/Header";


export default function MainLayout(props: { children: any }) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
