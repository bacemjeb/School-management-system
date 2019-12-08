<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function search($page, $limit, $email, $name, $enable) {

        $qb = $this->createQueryBuilder('u');

        if ($email) {
            $qb->andWhere('u.email LIKE :email')->setParameter('email', '%' . $email . '%');
        }
        if ($name) {
            $qb->andWhere('u.username LIKE :username')->setParameter('username', '%' . $name . '%');
        }

        if ($enable != '' && $enable != null) {
            $qb->andWhere('u.enabled = :enabled')->setParameter('enabled', $enable );
        }
        if ($page !== false) {
            $qb->setMaxResults($limit)
                    ->setFirstResult($page * $limit);
        }
        return $qb->getQuery()->getResult();
    }

    public function countUsers($email, $name, $enable) {
        $qb = $this->createQueryBuilder('u');
        $qb->select('COUNT(u)');
        if ($email) {
            $qb->andWhere('u.email LIKE :email')->setParameter('email', '%' . $email . '%');
        }
        if ($name) {
            $qb->andWhere('u.username LIKE :username')->setParameter('username', '%' . $name . '%');
        }

        if ($enable != '' && $enable != null) {
            $qb->andWhere('u.enabled = :enabled')->setParameter('enabled', $enable );
        }
        return $qb->getQuery()->getSingleScalarResult();
    }
    /* ########################################################################################## */

    /* ########################################################################################## */

    /* ########################################################################################## */


}
