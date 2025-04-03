'use client'
import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  MenuWrapper,
  ContentWrapper,
  MenuItem,
} from './layoutStyle';
import Link from 'next/link';

interface IProps {
  children: React.ReactNode;
}

const LayoutAdmin = ({ children }: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleClickMenu = (index: number) => {
    setSelectedIndex(index);
  }

  useEffect(() => {
    console.log('+++ mount Layout Admin');
    return () => {
      console.log('--- unmount Layout Admin');
    }
  }, []);

  return (
    <Wrapper>
      <MenuWrapper>
        <Link href="/admin">
          <MenuItem
            $isSelected={selectedIndex === 0}
            onClick={() => handleClickMenu(0)}
          >Home</MenuItem>
        </Link>
        <Link href="/admin/dashboard">
          <MenuItem
            $isSelected={selectedIndex === 1}
            onClick={() => handleClickMenu(1)}
          >Dashboard</MenuItem>
        </Link>
        <Link href="/admin/users">
          <MenuItem
            $isSelected={selectedIndex === 2}
            onClick={() => handleClickMenu(2)}
            >Users</MenuItem>
        </Link>
      </MenuWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  )
}

export default LayoutAdmin;