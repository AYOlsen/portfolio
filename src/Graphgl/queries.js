import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
    query GetServices {
        services {
        id
        title
        description
        image {
                url
            }
        }
    }
`;

export const GET_PROJECTS = gql`
    query GetProjects {
        projects {
        id
        title
        category
        slug
        description
        github
        skills
        image {
                url
            }
        }
    }
`;

export const GET_PROJECTBYID = gql`
    query GetProjectById($id: ID) {
        project(id: $id) {
        title
        slug
        description
        github
        skills
        image {
                url
            }
        }
    }
`;

export const GET_PROJECTSBYSLUG = gql`
    query GetProjectBySlug($projectId: String!) {
        project (where: {slug: $projectId}) {
        title
        slug
        description
        category
        github
        skills
        image {
                url
            }
        }
    }
`;

export const GET_LATESTPROJECTS = gql`
    query GetLatestProjects {
        projects(first: 3, orderBy: createdAt_DESC) {
        id
        title
        slug
        description
        category
        github
        skills
        image {
                url
            }
        }
    }
`;
