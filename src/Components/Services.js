import React from "react";
import styled from "styled-components";
import { BsTruck } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { SiAdguard } from "react-icons/si";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <BsTruck className="icon" />
              <h3>Super Fast And Free Delivery</h3>
            </div>
          </div>

          <div>
            <div className="services-2">
              <div className="services-colum-2">
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
              <div className="services-colum-2">
                <FaMoneyBill className="icon" />
                <h3>Money Back Garantee</h3>
              </div>
            </div>
          </div>

          <div className="services-1">
            <div>
              <SiAdguard className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .grid {
    gap: 4.8rem;
  }
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }
  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Services;
