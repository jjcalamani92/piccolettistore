import { gql } from "@apollo/client";

export const SITE = gql`
	query Site($id: String!) {
		site(id: $id) {
			name
		}
	}
`;

export const SITES = gql`
	query Sites {
		sites {
			_id
			title
			categories {
				name
				href
				description
				imageSrc
				imageAlt
			}
		}
	}
`;


export const SBS = gql`
	query Site($id: String!) {
		site(id: $id) {
			categories {
				name
				description
				href
				imageSrc
				sections {
					name
					href
					description
					imageSrc
					imageAlt
				}
				featured {
          name
					href
					description
					imageSrc
					imageAlt
        }
			}
		}
	}
`;

export const SBI = gql`
	query Site($id: String!) {
		site(id: $id) {
			categories {
				name
				href
				sections {
					name
					href
					description
					imageSrc
					imageAlt
					items {
						name
						href
						description
						imageSrc
						imageAlt
					}
				}
			}
		}
	}
`;
