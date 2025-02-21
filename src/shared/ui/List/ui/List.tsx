import React from 'react';

import { cls } from '@/shared/lib/classes.lib';
import cl from './_List.module.scss'

import { DEFAULT__LIST_DIRECTION } from "@/shared/data/list.data";
import { useScrollToTop } from '@/shared/hooks/useScrollToTop.hooks';
import { IList } from '@/shared/model/list.model';


export const List = <T extends any>({
    isLoading,
    loadingProps,
    componentLoading: ListItemComponentLoading,
    
    componentBetween: ListItemComponentBetween,
    componentAfter: ListItemComponentAfter,
    
    items=[], 
    listRef,
    component: ListItemComponent,
    componentProps,
    isScrollToTopNeeded = false,
    direction = DEFAULT__LIST_DIRECTION,
    activeId,
    activeIndex,
    gap,
    onClickItem,
    onClickDelete,
    onClickDeleteEvent,
    generateKey,
    style,
    className,
    classNameItem,
    ...rest
}: IList<T>) => {

    // HOOKS
    useScrollToTop(isScrollToTopNeeded);

    // PROPS
    // Loading
    const {length: lengthLoading,  ...updatedLoadingProps} = loadingProps ?? {}

    // Combining props
    const updatedComponentProps = {
        ...componentProps,
        className: cls(componentProps?.className, classNameItem)
    };

    // HANDLE
    const handleOnClickDelete = (e: React.MouseEvent<HTMLButtonElement>, it: T, index: number) => {
        if (onClickDelete) {
            onClickDelete(it, index)
        }
        if (onClickDeleteEvent) {
            onClickDeleteEvent(e)
        }
    }

    // console.log('ListItemComponentBetween', !!ListItemComponentBetween, ListItemComponentBetween, items.length)
    
    return (
        <div ref={listRef} 
            style={{ 
                gap: gap ? `${gap}px` : undefined,
            }} 
            className={cls(cl.list, cl[direction], className)} 
            {...rest}
        >
            {(isLoading && !!ListItemComponentLoading) ? (
                <>
                    {Array.from({ length: lengthLoading ?? 5 }).map((_, index) => (
                        <React.Fragment key={index}>
                            <ListItemComponentLoading {...updatedLoadingProps} />
                        </React.Fragment>
                    ))}
                </>
            ) : (items.map((it, index) => (
                <React.Fragment key={generateKey ? generateKey(it, index) : (it && typeof it === 'object' && 'id' in it ? it.id as number : index)}>
                    <ListItemComponent
                        {...updatedComponentProps}
                        item={it}
                        style={style}
                        onClick={() => onClickItem?.(it, index)}
                        onClickDelete={e => handleOnClickDelete(e, it, index)}
                        activeId={activeId}
                        isActive={activeIndex === index || !!(it && typeof it === 'object' && 'id' in it && it.id && activeId === it.id)}
                    />
                    {(ListItemComponentBetween && index + 1 !== items.length) && (
                        <ListItemComponentBetween />
                    )}
                    {ListItemComponentAfter && (
                        <ListItemComponentAfter />
                    )}
                </React.Fragment>
            )))}
        </div>
    );
}
