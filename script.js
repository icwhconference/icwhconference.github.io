* {
  box-sizing: border-box;
}

.site-header {
  position: relative;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  font-weight: bold;
  color: #333;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.nav-toggle span {
  display: block;
  width: 28px;
  height: 3px;
  background: #333;
  margin: 5px 0;
  transition: 0.3s;
}

/* Mobile */

@media (max-width: 768px) {

  .nav-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 70px;
    right: 15px;
    width: 260px;
    background: #ffffff;
    flex-direction: column;
    gap: 0;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    overflow: hidden;
    z-index: 9999;
  }

  .nav-links a {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
  }

  .nav-links a:last-child {
    border-bottom: none;
  }

  .nav-open .nav-links {
    display: flex;
  }
}
`
