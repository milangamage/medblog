'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import debounce from 'lodash.debounce';

const useTopMegaMenu = () => {
    const [selectedLink, setSelectedLink] = useState(null);
    const [isPolygonVisible, setIsPolygonVisible] = useState(false);
    const [isEmployerMenuOpen, setIsEmployerMenuOpen] = useState(false);
    const employerMenuRef = useRef(null);
    const polygonRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                employerMenuRef.current &&
                !employerMenuRef.current.contains(event.target) &&
                polygonRef.current &&
                !polygonRef.current.contains(event.target)
            ) {
                setSelectedLink(null);
                setIsEmployerMenuOpen(false);
                setIsPolygonVisible(false);
            }
        }

        const handleScroll = () => {
            setSelectedLink(null);
            setIsPolygonVisible(false);
            setIsEmployerMenuOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setSelectedLink(null);
        setIsPolygonVisible(false);
        setIsEmployerMenuOpen(false);
    }, [router.push]);

    const handleLinkClick = (link) => {

    };

    const handleNavigation = () => {
        setSelectedLink(null);
        setIsPolygonVisible(false);
        setIsEmployerMenuOpen(false);
    };

    const debouncedHandleMouseLeave = useCallback(
        debounce(() => {
            setSelectedLink(null);
            setIsEmployerMenuOpen(false);
            setIsPolygonVisible(false);
        }, 300),
        []
    );

    const handleMouseEnter = (link) => {
        debouncedHandleMouseLeave.cancel();
        setSelectedLink(link);
        if (link === 'explore') {
            setIsEmployerMenuOpen(true);
        }
        setIsPolygonVisible(true);
    };

    const handleMouseLeave = () => {
        debouncedHandleMouseLeave();
    };

    const handleMenuMouseEnter = () => {
        debouncedHandleMouseLeave.cancel();
    };

    const handleMenuMouseLeave = () => {
        debouncedHandleMouseLeave();
    };

    const handlePolygonMouseEnter = () => {
        debouncedHandleMouseLeave.cancel();
    };

    const handlePolygonMouseLeave = () => {
        debouncedHandleMouseLeave();
    };

    return {
        selectedLink,
        isPolygonVisible,
        isEmployerMenuOpen,
        handleLinkClick,
        handleMouseEnter,
        handleMouseLeave,
        handleMenuMouseEnter,
        handleMenuMouseLeave,
        handlePolygonMouseEnter,
        handlePolygonMouseLeave,
        employerMenuRef,
        polygonRef,
        handleNavigation,
    };
};

export default useTopMegaMenu;
