import { HeaderProps } from "@/components/layout/Header";
import { GetGlobalDataQuery } from "@/gql/graphql";
import { NavItem } from "@/types/nav-item";

export const mapHeaderData = (data: NonNullable<GetGlobalDataQuery['global']>): HeaderProps => ({
    logoUrl: `${process.env.NEXT_PUBLIC_API_URL}${data?.header?.logo?.image?.url ?? ''}`,
    logoText: data?.header?.logo?.logoText ?? '',
    navigation: data?.header?.navigation?.filter((item): item is NavItem => !!item) ?? [],
  });
  