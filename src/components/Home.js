import React from 'react'

function Home() {
  return (
    <div>
      <div>
        <div
          style={{
            background:
              'url("https://t4.ftcdn.net/jpg/04/45/70/71/360_F_445707107_elptpcI7pUDPa9kMdnX9e3506QdHfo7r.jpg")',
            backgroundSize: "cover",
            minHeight: "600px",
            padding: "20px",
          }}
        ></div>

        <footer className="bg-dark text-light text-center py-3 mb-0">
          <div>
            <p>&copy; 2023 Your Company</p>
            <p>İletişim Bilgileri: info@yourcompany.com | 123-456-7890</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home