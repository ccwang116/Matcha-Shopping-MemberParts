import React, { useState, useEffect } from "react"
import { Table, Container, Row, Col, ListGroup, Image } from "react-bootstrap"

function MemberSideLink(props) {
  const aListStyle ={background:"transparent",color:"white",border:"none",border:"none"}
  return (
    <>   
      <Container>
        <Row>
          <Col md={2}>
            <ListGroup >
              <ListGroup.Item action href="/membercenter" style={aListStyle}>
                會員資料
              </ListGroup.Item>
              <ListGroup.Item action href="#link2"  style={aListStyle}>
                我的訂單
              </ListGroup.Item>
              <ListGroup.Item action href="/membercenter/coupon" style={aListStyle}>
                折價券
              </ListGroup.Item>
              <ListGroup.Item action href="#link4" style={aListStyle}>
                我的追蹤
              </ListGroup.Item>
            </ListGroup>
          </Col> 
          {props.children}
        </Row>
      </Container>
    </>
  )
}
export default MemberSideLink
