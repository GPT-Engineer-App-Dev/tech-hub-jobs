import { useState } from "react";
import { Container, VStack, Text, Select, Box, Heading, SimpleGrid, Card, CardHeader, CardBody } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product", description: "Manage product lifecycle and roadmap." },
  { id: 2, title: "UX Designer", category: "Design", description: "Design user interfaces and experiences." },
  { id: 3, title: "Software Engineer", category: "Engineering", description: "Develop and maintain software applications." },
  { id: 4, title: "Data Scientist", category: "Engineering", description: "Analyze and interpret complex data." },
  { id: 5, title: "Graphic Designer", category: "Design", description: "Create visual content for various media." },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredJobs = selectedCategory
    ? jobs.filter((job) => job.category === selectedCategory)
    : jobs;

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Remote Tech Jobs</Heading>
        <Text fontSize="lg">Find your next remote job in tech. Filter by category to narrow down your search.</Text>
        <Select
          placeholder="Filter by category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          maxW="300px"
        >
          <option value="Product">Product</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </Select>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {filteredJobs.map((job) => (
            <Card key={job.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <CardHeader>
                <Heading size="md">{job.title}</Heading>
                <Text fontSize="sm" color="gray.500">{job.category}</Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;