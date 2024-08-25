import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const BookCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="430px" />
      <CardBody>
        <SkeletonText />
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default BookCardSkeleton;
