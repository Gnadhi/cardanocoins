import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';

const StyledMenu = styled(AntMenu)``;

export default function Navbar() {
  const router = useRouter();

  const menuOptions = [
    {
      key: 'home',
      icon: <MailOutlined />,
      text: 'Home',
      link: '/',
      active: router.pathname === '/',
    },
    {
      key: 'about',
      icon: <AppstoreOutlined />,
      text: 'About',
      link: '/about',
      active: router.pathname === '/about',
    },
  ];

  return (
    <StyledMenu
      theme="dark"
      mode="horizontal"
      selectedKeys={menuOptions
        .filter((option) => option.active)
        .map((option) => option.key)}
    >
      {menuOptions.map((option) => (
        <AntMenu.Item key={option.key} icon={option.icon}>
          <Link href={option.link}>
            <a>{option.text}</a>
          </Link>
        </AntMenu.Item>
      ))}
    </StyledMenu>
  );
}
