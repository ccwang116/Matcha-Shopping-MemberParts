import React, { useState, useEffect } from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import { Link, NavLink, withRouter } from "react-router-dom"

function MyNavbar(props) {
  const { auth, name } = props

  const loginButton = (
    <>
      <Button
        variant="outline-light"
        onClick={() => {
          props.history.push("/memberlogin")
        }}
      >
        登入
      </Button>
    </>
  )
  const logoutButton = (
    <>
      <span style={{ color: "#ffffff" }}>{name}, 你好</span>
      <Button
        variant="outline-light"
        onClick={() => {
          props.history.push("/memberlogin")
        }}
      >
        登出
      </Button>
    </>
  )

  const displayButton = auth ? logoutButton : loginButton
  const pathlist = [
    "/",
    "/about",
    "/product",
    "/todoapp",
    "/memberlogin",
    "/counter",
    "/membercenter",
    "/coupon"
  ]
  const themenames = [
    "light",
    "light",
    "light",
    "light",
    "light",
    "light",
    "dark",
    "dark"
  ]
  // 先找出對應的主題
  let locationPathname = props.location.pathname
  // `/product/xxxx` 轉為 `/product`
  if (locationPathname.includes("/product")) locationPathname = "/product"
  if (locationPathname.includes("/coupon")) locationPathname = "/membercenter"

  const index = pathlist.findIndex((v) => v === locationPathname)

  return (
    <>
      <Navbar variant={themenames[index]} fixed="top">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {/* 把Nav.Link當作NavLink來使用 */}
          {/* 記得首頁`/`要加exact作精確比對，不然都會一直點亮 */}
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            關於我們
          </Nav.Link>
          <Nav.Link as={NavLink} to="/memberlogin">
            會員登入
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/shop"
            onClick={() => localStorage.setItem("page", 1)}
          >
            產品列表
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            購物車
          </Nav.Link>
          <Nav.Link as={NavLink} to="/membercenter">
            Member center
          </Nav.Link>
        </Nav>
        <Form inline>{displayButton}</Form>
      </Navbar>
    </>
  )
}

export default withRouter(MyNavbar)
